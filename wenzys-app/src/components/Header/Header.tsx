import { PrimaryButton } from "@fluentui/react";
import { Link as RouterLink } from 'react-router-dom';
import './Header.css'
// import { useState } from "react";

function Header() {
    // const [selectedLang, setSelectedLang] = useState('en');
    // const options: IDropdownOption[] = [
    //     { key: 'en', text: 'EN' },
    //     { key: 'es', text: 'ES' },
    // ];

    return (
        <div className="header-container">
            <h1 className="wenzy-text">Wenzy's</h1>
            <div className="page-names">
                <RouterLink to={`/company`} className="page-name">Company</RouterLink>
                <RouterLink to={`/board`} className="page-name">Board</RouterLink>
                <RouterLink to={`/blogs`} className="page-name">Blogs</RouterLink>
                {/* <RouterLink to={`/${selectedLang}/company`} className="page-name">Company</RouterLink>
                <RouterLink to={`/${selectedLang}/board`} className="page-name">Board</RouterLink>
                <RouterLink to={`/${selectedLang}/revenue`} className="page-name">Revenue</RouterLink> */}
                {/* <Dropdown
                    className="lang-dropdown"
                    placeholder="EN"
                    options={options}
                    defaultSelectedKey="en"
                    onChange={(event, option) => {
                        if (typeof option?.key === 'string') {
                            setSelectedLang(option.key);
                        }
                    }}
                    /> */}
            </div>
            <div className="go-to-app-btn">
                <PrimaryButton>Go to App</PrimaryButton>
            </div>
        </div>
    )
}

export default Header;