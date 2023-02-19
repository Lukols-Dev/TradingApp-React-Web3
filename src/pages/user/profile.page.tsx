import { Button, Input, message, Upload, UploadProps } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Card } from "../../components/common/cards";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { IUserData } from "../../types/user.types";
import { UserDataService } from "../../services/user-data.service";

export const Profile: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    name: "",
    surname: "",
    customerID: "",
    subscriptionID: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadAccount = async () => {
    await UserDataService.updateUserData(
      user.uid,
      userData.name,
      userData.surname
    );
    await window.location.reload();
  };

  const deleteAccount = async () => {
    await UserDataService.deleteAccountData(user.uid)
      .then(() => {
        message.success("Konto zostało usunięte!");
        setTimeout(() => window.location.reload(), 500);
      })
      .catch((error) => {
        message.error("Wystąpił błąd: ", error);
      });
  };

  const styleFormulage = "w-[400px] mb-2 flex flex-col gap-2";
  const styleLabel =
    "font-roboto font-bold text-sm max-w-[300px] flex m-0 text-black/[.7]";

  useEffect(() => {
    if (user) {
      (async () => {
        const respUserData = await UserDataService.getUserDataID(user.uid);
        setUserData(respUserData);
      })();
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="h-[500px] ml-[20px] mr-[50px] flex flex-col">
        <Card>
          <div className={styleFormulage}>
            <p className={styleLabel}>Profile image:</p>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className={styleFormulage}>
            <p className={styleLabel}>Imię:</p>
            <Input
              name="name"
              placeholder={userData?.name}
              onChange={(e) => handleData(e)}
            />
          </div>
          <div className={styleFormulage}>
            <p className={styleLabel}>Nazwisko:</p>
            <Input
              name="surname"
              placeholder={userData?.surname}
              onChange={(e) => handleData(e)}
            />
          </div>
          <div className={styleFormulage}>
            <p className={styleLabel}>E-mail:</p>
            <Input
              name="email"
              placeholder={userData?.email}
              onChange={(e) => handleData(e)}
              disabled
            />
          </div>
          <div className="flex w-full gap-4 justify-end mt-auto mb-0">
            <Button type="primary" onClick={uploadAccount}>
              Zapisz zmiany
            </Button>
          </div>
        </Card>
      </div>
      <div className="h-[200px] w-[400px] ml-[20px] mr-[50px] flex flex-col">
        <Card>
          <p className={styleLabel}>Usuń konto</p>
          <p className="font-roboto font-medium text-sm max-w-[300px] flex m-0 mt-4">
            Tutaj możesz usunąć swoje konto. Wszystkie Twoje dane, transakcje,
            subskrypcja zostaną utracone na zawsze.
          </p>
          <div className="flex w-full gap-4 justify-end mt-auto mb-0">
            <Button type="primary" danger onClick={deleteAccount}>
              Usuń konto
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
