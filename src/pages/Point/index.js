import React from 'react'
import classes from './index.module.scss'
import { Page } from '../../components'
import NumberValue from '../../components/NumberValue'
import TextValue from '../../components/TextValue'
import Attr from '../../components/Attr'
import PointInput from '../../components/PointInput'
import { Form, Button, Input, IconButton, toast } from '../../ui'

const defaultFormData = {
    a: ''   
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
            if (!formData.a) {
                toast.error('请输入点坐标')
                return
            }
            let inputA = formData.a.replace(/^\s+/, '').replace(/\s+$/, '')
            let match = inputA.split(/[^\d.]+/)
            console.log('match', match)
            if (match.length < 2) {
                toast.error('点 A 输入不正确')
                return
            }

            function str2Pt(str) {
                let match = str.split(/[^\d.-]+/)
                let pt = {
                    x: parseFloat(match[0]),
                    y: parseFloat(match[1]),
                }
                if (match[2]) {
                    pt.z = parseFloat(match[2])
                }
                return pt
            }

            let pt = str2Pt(formData.a)
            // let b = str2Pt(inputB)
            console.log('pt', pt)
            // console.log('b', b)
            // let center = {
            //     x: (a.x + b.x) / 2,
            //     y: (a.y + b.y) / 2,
            //     z: (a.z + b.z) / 2,
            // }

            function getDistance(a, b) {
                return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + ((a.z || b.z) ? Math.pow(a.z - b.z, 2) : 0))
            }

            // console.log('center', center)
            let distance = getDistance(pt, {
                x: 0,
                y: 0,
            })
            // console.log('distance', distance)
            let position = ''
            if (pt.x === 0 && pt.y === 0) {
                position = '点是原点，同时在 x 轴和 y 轴上'
            } else if (pt.x === 0) {
                position = '点在 y 轴上'
            } else if (pt.y === 0) {
                position = '点在 x 轴上'
            } else if (pt.x > 0 && pt.y > 0) {
                position = '点在第一象限'
            } else if (pt.x < 0 && pt.y > 0) {
                position = '点在第二象限'
            } else if (pt.x < 0 && pt.y < 0) {
                position = '点在第三象限'
            } else if (pt.x < 0 && pt.y > 0) {
                position = '点在第四象限'
            }

            let result = {
                x: pt.x,
                y: pt.y,
                position,
                distance,
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
            <Page title="点" action={
                <div>
                    <IconButton icon="help" href="https://project.yunser.com/products/86a50440295211ea970d19dd4201fab9" target="_blank" />
                </div>
            }>
                <Form className={classes.form}>
                    <Form.Item label="点 A">
                        <PointInput value={formData.a} hint="x, y" onChange={handlerChange('a')} />
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
                        <Attr.Item title="表示">
                            <TextValue value={`${result.x}, ${result.y}`} />
                        </Attr.Item>
                        <Attr.Item title="横坐标（x）">
                            <NumberValue value={result.x} />
                        </Attr.Item>
                        <Attr.Item title="纵坐标（y）">
                            <NumberValue value={result.y} />
                        </Attr.Item>
                        <Attr.Item title="位置">
                            点在第一象限
                        </Attr.Item>
                        <Attr.Item title="到原点的距离">
                            <NumberValue value={result.distance} />
                        </Attr.Item>
                        <Attr.Item title="图像">
                            开发中...
                        </Attr.Item>
                        <Attr.Item title="快速计算">
                            开发中...
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

