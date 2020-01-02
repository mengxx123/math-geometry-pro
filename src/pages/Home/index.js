import React from 'react'
// import classes from './Home.module.scss'
import { Link } from 'react-router-dom'
import { Page } from '../../components'
import { Button, AppBar, Input, Paper } from '../../ui'
// import { Page, Button, AppBar, Input } from '../components'

export default class Home extends React.Component {

    state = {
        conditions: [
            {
                type: 'point',
                data: {
                    name: 'A',
                    x: 1,
                    y: 2
                }
            },
            {
                type: 'point',
                data: {
                    name: 'B',
                    x: 100,
                    y: 0
                }
            },
            {
                type: 'point',
                data: {
                    name: 'C',
                    x: 100,
                    y: 100
                }
            },
            {
                type: 'line',
                data: {
                    name: 'D',
                    A: 3,
                    B: 4,
                    C: 5,
                }
            }
        ],
        results: [
            // {
            //     type: 'distance',
            //     data: ['A', 'B'],
            //     result: '100'
            // }
        ],
        distanceForm: {
            first: 'B',
            second: 'C',
        }
    }

    // componentDidMount() {
    // }

    render() {
        const setState = data => {
            this.setState(data)
        }
        const { value } = this.props
        // let state = this.state

        // const { tableData, conditions, results, distanceForm, commonForm, curType, activeRule, addDialogVisible } = state

        function CardTitle(props) {
            return <div>{props.children}</div>
        }

        function handlerChange(value) {
            setState({
                value,
            })
        }

        console.log('==home render')

        return (
            <Page title="应用" actions={[
                {
                    type: 'icon',
                    icon: 'search',
                    href: 'https://search.yunser.com?utm_source=math',
                    target: '_blank',
                    title: '搜索'
                },
                {
                    type: 'icon',
                    icon: 'apps',
                    href: 'https://app.yunser.com?utm_source=math',
                    target: '_blank',
                    title: '应用'
                }
            ]}>
              
                    <div>
                        <Link to="/about">关于</Link>
                        <a href="https://project.yunser.com/products/aba65b302c5511eab06f13e9da1116e2" target="_blank" rel="noopener noreferrer">帮助</a>
                    </div>
                    <div>
                        <CardTitle>按钮</CardTitle>
                        
                        <Button onClick={() => {
                            alert('点击')
                        }}>这是按钮啊啊啊啊</Button>
                    </div>
                    <div>
                        <CardTitle>App Bar</CardTitle>
                        
                        <AppBar title="这是页面标题"></AppBar>
                    </div>

                    <div>
                        <CardTitle>输入</CardTitle>
                        
                        <Input value={value} onChange={handlerChange} />
                    </div>

                    <i class="mu-icon material-icons">menu</i>

                    <div>
                        <CardTitle>Paper</CardTitle>
                        
                        <Paper>123</Paper>
                    </div>
            </Page>
        )
    }
}

