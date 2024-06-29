import Menu  from '../../components/authMenu'
import * as Style from '../../styles/styled/update'
const { shell } = window.require('electron');

import Logo from '../../icon/logo'

export default function Update() {
    function openUpdate() {
        const url = 'https://github.com/evairx/hours-booster/releases';
        shell.openExternal(url);
    }

    return (
        <Style.Container>
            <Menu />
            <Logo/>
            <Style.Content>
                <p>It looks like you have an old version, there is a new update available.</p>
                <Style.Button onClick={openUpdate}>UPDATE</Style.Button>
            </Style.Content>
        </Style.Container>
    )
}