import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, Box, Button, FormLabel, Image, Input, Stack, VStack} from "@chakra-ui/react";
import {customerProfilePictureUrl, updateCustomer, uploadCustomerProfilePicture} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";
import {useCallback} from "react";
import {useDropzone} from "react-dropzone";

const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
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

const MyDropzone = ({ customerId, fetchCustomers }) => {
    const onDrop = useCallback(acceptedFiles => {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0])

        uploadCustomerProfilePicture(
            customerId,
            formData
        ).then(() => {
            successNotification("成功", "个人照片已上传")
            fetchCustomers()
        }).catch(() => {
            errorNotification("错误", "个人照片上传失败")
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Box {...getRootProps()}
             w={'100%'}
             textAlign={'center'}
             border={'dashed'}
             borderColor={'gray.200'}
             borderRadius={'3xl'}
             p={6}
             rounded={'md'}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>将图片放到这里 ...</p> :
                    <p>拖动到这里来,或者点击选择图片文件</p>
            }
        </Box>
    )
}

const UpdateCustomerForm = ({fetchCustomers, initialValues, customerId}) => {
    return (
        <>
            <VStack spacing={'5'} mb={'5'}>
                <Image
                    borderRadius={'full'}
                    boxSize={'150px'}
                    objectFit={'cover'}
                    src={customerProfilePictureUrl(customerId)}
                />
                <MyDropzone
                    customerId={customerId}
                    fetchCustomers={fetchCustomers}
                />
            </VStack>
            <Formik
                initialValues={initialValues}
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
                        .required(),
                })}
                onSubmit={(updatedCustomer, {setSubmitting}) => {
                    setSubmitting(true);
                    updateCustomer(customerId, updatedCustomer)
                        .then(res => {
                            console.log(res);
                            successNotification(
                                "客户已更新",
                                `${updatedCustomer.name} 已成功更新`
                            )
                            fetchCustomers();
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
                {({isValid, isSubmitting, dirty}) => (
                    <Form>
                        <Stack spacing={"24px"}>
                            <MyTextInput
                                label="姓名"
                                name="name"
                                type="text"
                                placeholder="zhangsan"
                            />

                            <MyTextInput
                                label="邮箱"
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

                            <Button disabled={!(isValid && dirty) || isSubmitting} type="submit">提交</Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default UpdateCustomerForm;