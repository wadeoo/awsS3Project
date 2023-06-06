import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, Box, Button, FormLabel, Input, Select, Stack} from "@chakra-ui/react";
import {saveCustomer} from "../../services/client.js";
import {successNotification, errorNotification} from "../../services/notification.js";

const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert className="error" status={"error"} mt={2}>
                    <AlertIcon/>
                    {meta.error}
                </Alert>
            ) : null}
        </Box>
    );
};

const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Select {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert className="error" status={"error"} mt={2}>
                    <AlertIcon/>
                    {meta.error}
                </Alert>
            ) : null}
        </Box>
    );
};

// And now we can use these
const CreateCustomerForm = ({ onSuccess }) => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    age: 0,
                    gender: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, '15个字符或者以下')
                        .required('姓名必填'),
                    email: Yup.string()
                        .email('20个字符或者以下')
                        .required('邮箱必填'),
                    age: Yup.number()
                        .min(16, '至少16岁')
                        .max(100, '最多100岁')
                        .required('年龄必填'),
                    password: Yup.string()
                        .min(4, '至少4个字符')
                        .max(15, '最多15个字符')
                        .required('密码必填'),
                    gender: Yup.string()
                        .oneOf(
                            ['MALE', 'FEMALE'],
                            '无效性别'
                        )
                        .required('性别必选'),
                })}
                onSubmit={(customer, {setSubmitting}) => {
                    setSubmitting(true);
                    saveCustomer(customer)
                        .then(res => {
                            console.log(res);
                            successNotification(
                                "客户已保存",
                                `${customer.name} 成功保存`
                            )
                            onSuccess(res.headers["authorization"]);
                        }).catch(err => {
                            console.log(err);
                            errorNotification(
                                err.code,
                                err.response.data.message
                            )
                    }).finally(() => {
                         setSubmitting(false);
                    })
                }}
            >
                {({isValid, isSubmitting}) => (
                    <Form>
                        <Stack spacing={"24px"}>
                            <MyTextInput
                                label="姓名"
                                name="name"
                                type="text"
                                placeholder="zhangsan"
                            />

                            <MyTextInput
                                label="邮箱地址"
                                name="email"
                                type="email"
                                placeholder="zhangsan@gmail.com"
                            />

                            <MyTextInput
                                label="年龄"
                                name="age"
                                type="number"
                                placeholder="20"
                            />

                            <MyTextInput
                                label="密码"
                                name="password"
                                type="password"
                                placeholder={"选择一个安全点的密码"}
                            />

                            <MySelect label="性别" name="gender">
                                <option value="">选择性别</option>
                                <option value="MALE">男</option>
                                <option value="FEMALE">女</option>
                            </MySelect>

                            <Button disabled={!isValid || isSubmitting} type="submit">提交</Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default CreateCustomerForm;