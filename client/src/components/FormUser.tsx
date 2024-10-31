import { useContext, useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { User } from "../interfaces/Users";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";

const FormUser = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [form] = Form.useForm();
  const { userRegister, userLogin } = useContext(AuthContext);

  const onFinish: FormProps<User>["onFinish"] = (values) => {
    try {
      if (isRegister) {
        userRegister(values);
        setIsRegister(false);
      } else {
        console.log(values);

        userLogin(values);
      }
      form.resetFields();
    } catch (error) {
      console.log(error);
      toast.error("Api error");
    }
  };

  const onFinishFailed: FormProps<User>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 shadow-md rounded-md">
        <h2 className="text-center text-2xl font-semibold mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        <div className="mb-4 text-center">
          <Radio.Group
            value={isRegister}
            onChange={(e) => setIsRegister(e.target.value)}
          >
            <Radio.Button value={false}>Login</Radio.Button>
            <Radio.Button value={true}>Register</Radio.Button>
          </Radio.Group>
        </div>

        <Form
          name={isRegister ? "register" : "login"}
          onFinish={onFinish}
          style={{ width: 700 }}
          layout="vertical"
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {isRegister && (
            <Form.Item<User>
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          )}

          <Form.Item<User>
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item<User>
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item<User> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {isRegister ? "Register" : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;
