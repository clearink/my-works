import React, { memo } from "react";
import { Form, Select, DatePicker, InputNumber, Button } from "antd";

import locale from "antd/es/date-picker/locale/zh_CN";
const { Item } = Form;
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function SettingForm(props) {
  const { form, finish } = props;
  return (
    <Form
      {...formLayout}
      form={form}
      className="setting-form"
      onFinish={finish}
    >
      <Item name="sex" label="性别" initialValue="male">
        <Select style={{ width: 200 }}>
          <Select.Option value="male">男</Select.Option>
          <Select.Option value="female">女</Select.Option>
        </Select>
      </Item>
      <Item
        name="birthDay"
        label="生日"
        rules={[{ required: true, message: "请选择出生日期!" }]}
      >
        <DatePicker locale={locale} disabledDate={(cur) => cur > Date.now()} />
      </Item>
      <Item name="liveYear" label="活多久(年)" initialValue={70}>
        <InputNumber style={{ width: 200 }} />
      </Item>
      <Item style={{ justifyContent: "center" }}>
        <Button type="primary" htmlType="submit">
          开始计算
        </Button>
      </Item>
    </Form>
  );
}
export default memo(SettingForm);
