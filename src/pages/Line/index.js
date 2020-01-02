import React from 'react'
import { Page } from '../../components'
import NumberValue from '../../components/NumberValue'
import PointInput from '../../components/PointInput'
import TextValue from '../../components/TextValue'
import PointValue from '../../components/PointValue'
import Attr from '../../components/Attr'
import classes from './index.module.scss'
import { Form, Button, Input, IconButton, toast } from '../../ui'

export default class Line extends React.Component {

    state = {
        result: null,
        result2: null,
        formData: {
            a: '',
            b: '',
        },
    }

    render() {
        const setState = data => {
            this.setState(data)
        }
        const { value } = this.props

        const { formData, result, result2 } = this.state
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

        function setFormData(data, callback) {
            setState({
                formData: {
                    ...formData,
                    ...data,
                }
            }, callback)
        }

        function reset() {
            setFormData({
                a: '',
                b: '',
            })
        }

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
                toast.error('请输入点 A')
                return
            }
            let inputA = formData.a.replace(/^\s+/, '').replace(/\s+$/, '')
            let match = inputA.split(/[^\d.]+/)
            console.log('match', match)
            if (match.length < 2) {
                toast.error('点 A 输入不正确')
                return
            }
            if (!formData.b) {
                toast.error('请输入点 B')
                return
            }
            let inputB = formData.b.replace(/^\s+/, '').replace(/\s+$/, '')
            match = inputB.split(/[^\d.]+/)
            console.log('match', match)
            if (match.length < 2) {
                toast.error('点 B 输入不正确')
                return
            }
            function str2Pt(str) {
                let match = str.split(/[^\d.]+/)
                let pt = {
                    x: parseFloat(match[0]),
                    y: parseFloat(match[1]),
                }
                if (match[2]) {
                    pt.z = parseFloat(match[2])
                }
                return pt
            }

            let a = str2Pt(inputA)
            let b = str2Pt(inputB)

            if (a.x === b.x && a.y === b.y) {
                toast.error('两个点不能一样')
                return
            }
            console.log('a', a)
            console.log('b', b)
            let center = {
                x: (a.x + b.x) / 2,
                y: (a.y + b.y) / 2,
                z: (a.z + b.z) / 2,
            }

            function getDistance(a, b) {
                return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + ((a.z || b.z) ? Math.pow(a.z - b.z, 2) : 0))
            }

            console.log('center', center)
            let distance = getDistance(a, b)
            console.log('distance', distance)


            let A = b.y - a.y
            let B = a.x - b.x
            let C = b.x * a.y - a.x * b.y
            function expItem(num, val, idx) {
                if (num === 0) {
                    return ''
                }
                if (num > 0) {
                    return (idx === 0 ? '' : '+') + (num === 1 ? (val ? '' : '1') : num) + (val || '')
                }
                return '' + num + (val || '')
            }
            let exp = `${expItem(A, 'x', 0)}${expItem(B, 'y')}${expItem(C)}=0`
            // 直线方程的公式:一般式: ax +by + c = 0 其中
  // a = y2 - y1,
  // b = x1 - x2,
  // c = x2 * y1 - x1 * y2;
            let k = - A / B
            let CC = - C / B
            let kExp = `y = ${expItem(k, 'x', 0)}${expItem(CC)}`

            setState({
                result: {
                    a,
                    b,
                    distance,
                    midPt: center,
                    exp,
                    k,
                    CC,
                    kExp,
                }
            })
        }

        function calPoint() {
            if (formData.x) {
                setState({
                    result2: {
                        x: 190,
                        y: 180,
                    }
                })
            }

        }

        // function debug() {
        //     if (!result) {
        //         formData.a = '0, 1'
        //         formData.b = '1, 3'
        //         submit()
        //     }
        // }
        // debug()

        return (
            <Page title="直线" action={
                <div>
                    <IconButton icon="help" href="https://project.yunser.com/products/6613dce02b2a11eab06f13e9da1116e2" target="_blank" />
                </div>
            }>
                <Form className={classes.form}>
                    <Form.Item label="点 A">
                        <PointInput value={formData.a} onChange={handlerChange('a')} />
                    </Form.Item>
                    <Form.Item label="点 B">
                        <PointInput value={formData.b} onChange={handlerChange('b')} />
                    </Form.Item>
                    <Form.Item>
                        <Button.ButtonGroup>
                            <Button color="primary" onClick={submit}>计算</Button>
                            <Button onClick={reset}>重置</Button>
                        </Button.ButtonGroup>
                    </Form.Item>
                </Form>

                {!!result &&
                    <Attr>
                        <Attr.Item title="标准方程">
                            <TextValue value={result.exp} />
                        </Attr.Item>
                        <Attr.Item title="斜率">
                            <NumberValue value={result.k} />
                        </Attr.Item>
                        <Attr.Item title="截距">
                            <NumberValue value={result.CC} />
                        </Attr.Item>
                        <Attr.Item title="斜截式">
                            <TextValue value={result.kExp} />
                        </Attr.Item>
                    </Attr>
                }

                <Form className={classes.form}>
                    <Form.Item label="线上一点 x 坐标">
                        <Input value={formData.x} type="number" onChange={handlerChange('x')} />
                    </Form.Item>
                    <Form.Item label="线上一点 x 坐标">
                        <Input value={formData.y} type="number" onChange={handlerChange('y')} />
                    </Form.Item>
                    <Form.Item>
                        <Button.ButtonGroup>
                            <Button color="primary" onClick={calPoint}>x 求 y 或 y 求 x</Button>
                            <Button onClick={reset}>重置</Button>
                        </Button.ButtonGroup>
                    </Form.Item>
                </Form>

                {!!result2 &&
                    <Attr>
                        <Attr.Item title="线上一点">
                            <PointValue value={result2} />
                        </Attr.Item>
                    </Attr>
                }
            </Page>
        )
    }
}

