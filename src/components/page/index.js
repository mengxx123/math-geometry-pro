import React from 'react'
import { Page as UIPage, AppBar, Drawer } from '../../ui'
import { Container } from '..'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import classes from './index.module.scss'

function ListItem(props) {
    const { title, icon, to, href, target } = props

    function handlerClick() {
        // if (to) {
        //     props.history.push(to)
        //     // router.push(to)
        // }
        if (href) {
            console.log('href', href)
            window.open(href, target)
        }
    }

    function Content() {
        return (
            <div className={classes.content}>
                <i className={classNames('ui-icon', 'material-icons', classes.icon)}>{icon}</i>
                <div className={classes.title}>{title}</div>
            </div>
        )
    }

    if (to) {
        return (
            <div className={classes.listItem}>
                <Link className={classes.link} to={to}>
                    <Content />
                </Link>
            </div>
        )
    }

    return (
        <div className={classes.listItem} onClick={handlerClick}>
            <Content />
        </div>
    )
}

const MIBILE_DEVICE_WIDTH = 1000

export class Page extends React.Component {

    state = {
        sideVisible: window.innerWidth > MIBILE_DEVICE_WIDTH,
    }

    componentDidMount() {
        const { title } = this.props
        document.title = title
    }
    render() {
        const { title, action, children } = this.props
        const { sideVisible } = this.state
        const setState = data => this.setState(data)
        const isMobile = window.innerWidth < MIBILE_DEVICE_WIDTH

        function onMenuClick() {
            setState({
                sideVisible: !sideVisible,
            })
        }

        function Side() {
            return (
                <div className={classes.sideContent}>
                    <div className={classes.header}>
                        <img className={classes.logo} src="https://geometry.yunser.com/static/img/math.svg" alt="logo" />
                    </div>
                    <div className={classes.body}>
                        <div className={classes.list}>
                            <ListItem title="首页" icon="home" to="/" />
                            <ListItem title="关于" icon="info" to="/about" />
                            <ListItem title="点" icon="info" to="/point" />
                            <ListItem title="直线" icon="info" to="/line" />
                            <ListItem title="角" icon="info" to="/angle" />
                            <ListItem title="帮助" icon="info" href="https://project.yunser.com/products/aba65b302c5511eab06f13e9da1116e2" target="_blank" />
                        </div>

                    </div>
                </div>
            )
        }
        
        return (
            <UIPage>
                <AppBar className={classes.appBar} title={title} onMenuClick={onMenuClick} action={action} />
                <div>
                    <div className={classes.side} style={{left: sideVisible && !isMobile ? 0 : -275}}>
                        <Side />
                    </div>
                    <div className={classes.main} style={{paddingLeft: sideVisible && !isMobile ? 275 : 0}}>
                        <Container>
                            {children}
                        </Container>
                    </div>
                </div>
                <Drawer visible={sideVisible && isMobile} onCancel={() => setState({ sideVisible: false })}>
                    <div className={classes.drawer}>
                        <Side />
                    </div>
                </Drawer>
            </UIPage>
        )
    }
}
