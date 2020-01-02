import React from 'react'
import classes from './index.module.scss'
import { Page } from '../../components'
import NumberValue from '../../components/NumberValue'
import TextValue from '../../components/TextValue'
import Attr from '../../components/Attr'
import PointInput from '../../components/PointInput'
import { Form, Button, Input, IconButton, toast } from '../../ui'

const defaultFormData = {
    degree: null
}
export default class Home extends React.Component {

    state = {
        result: null,
        formData: {
            ...defaultFormData
        },
    }

    render() {
        const setState = (data, callback) => {
            this.setState(data, callback)
        }
        const { value } = this.props

        const { formData, result } = this.state
        console.log('this.state', this.state)

        function handlerChange(name) {
            console.log('==handlerChange', value)
            return value => {
                formData[name] = value
                setState({
                    formData,
                })
            }
        }

        function setFormData(data) {
            setState({
                formData: {
                    ...formData,
                    ...data,
                }
            })
        }

        function reset() {
            setState({
                formData: {
                    ...defaultFormData
                },
                result: null,
            })
        }

        // function setOriginPt() {
        //     setState({
        //         formData: {
        //             ...formData,
        //             a: '0, 0',
        //         },
        //     }, () => {
        //         // submit()
        //     })
        // }

        // function debug() {
        //     if (!result) {
        //         submit()
        //     }
        // }
        // debug()

        function submit() {
            // alert('点击')
            // form.validateFields((err, values) => {
            //     if (err) {
            //         toast.success('失败')
            //         return
            //     }
            // })
            // console.log('values', values)
            // toast.success('成功了')
            let { degree } = formData
            if (!degree) {
                toast.error('请输入角度')
                return
            }

            function degree2rad(angle) {
                return angle / 180 * Math.PI
            }
            function rad2angle(rad) {
                return rad / Math.PI * 180
            }

            let rad = degree2rad(degree)

            let result = {
                degree,
                rad,
                // x: pt.x,
                // y: pt.y,
                // position,
                // distance,
            }
            setState({
                result,
            })
        }

        // const form = {
        //     values: {},
        //     validateFields(callback) {
        //         if (!value) {
        //             callback([])
        //             return
        //         }
        //         callback(null, {

        //         })
        //     }
        // }

        return (
            <Page title="角" action={
                <div>
                    <IconButton icon="help" href="https://project.yunser.com/products/9299e2902cb611eab06f13e9da1116e2" target="_blank" />
                </div>
            }>
                <Form className={classes.form}>
                    <Form.Item label="度数">
                        <Input value={formData.degree} type="number" onChange={handlerChange('degree')} />
                    </Form.Item>
                    <Form.Item>
                        <Button.ButtonGroup className={classes.btnGroup}>
                            <Button color="primary" onClick={submit}>计算</Button>
                            {/* <Button onClick={setOriginPt}>原点</Button> */}
                            <Button onClick={reset}>重置</Button>
                        </Button.ButtonGroup>
                    </Form.Item>
                    {/* <div className={classes.formItemSubmit}>

                    </div> */}
                    {/* <Form.Item label="点 B">
                        <Input defaultValue="888" type="number" onChange={handlerChange} />
                    </Form.Item> */}
                    {/* <CardTitle>输入</CardTitle> */}
                </Form>

                {!!result &&
                    <Attr className="">
                        <Attr.Item title="角度">
                            <NumberValue value={result.degree} />
                        </Attr.Item>
                        <Attr.Item title="弧度">
                            <NumberValue value={result.rad} />
                        </Attr.Item>
                    </Attr>
                    // <div className={classes.attrList}>
                    // </div>
                }
                    {/* <Article>
                        <h2>这是二级标题</h2>
                        <p>文字段落</p>
                    </Article> */}
            </Page>
        )
    }
}

