import { Button, Form, Input, Tag } from "antd";

export default function SignUpPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const customizeRequiredMark = (label, { required }) => (
    <>
      {required ? (
        <Tag color="error">Required</Tag>
      ) : (
        <Tag color="warning">optional</Tag>
      )}
      {label}
    </>
  );
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={customizeRequiredMark}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Full Name" required>
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        label="Login"
        required
        rules={[{ required: true, message: "Please input login!" }]}
      >
        <Input placeholder="Login" />
      </Form.Item>
      <Form.Item label="Password" required>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item label="Repeat password" required>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
