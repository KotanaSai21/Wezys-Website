import './Company.css';
function Company() {
    const teamMembers = [
        { name: 'Alice Johnson', designation: 'CEO', linkedinUrl: 'https://www.linkedin.com/in/alicejohnson', iconUrl: 'https://via.placeholder.com/50' },
        { name: 'Bob Smith', designation: 'CTO', linkedinUrl: 'https://www.linkedin.com/in/bobsmith', iconUrl: 'https://via.placeholder.com/50' },
        { name: 'Charlie Brown', designation: 'CFO', linkedinUrl: 'https://www.linkedin.com/in/charliebrown', iconUrl: 'https://via.placeholder.com/50' },
        { name: 'Alice Johnson', designation: 'CEO', linkedinUrl: 'https://www.linkedin.com/in/alicejohnson', iconUrl: 'https://via.placeholder.com/50' },
        { name: 'Bob Smith', designation: 'CTO', linkedinUrl: 'https://www.linkedin.com/in/bobsmith', iconUrl: 'https://via.placeholder.com/50' },
        { name: 'Charlie Brown', designation: 'CFO', linkedinUrl: 'https://www.linkedin.com/in/charliebrown', iconUrl: 'https://via.placeholder.com/50' },
    ];
    return (
        <div className="company-div">
            <div className="unlocking-div">
                <h2 className=''> Unlocking Value together</h2>
                <div className='unlocking-div-text'>Working collaboratively to unlock value, we stand at the forefront of real-world asset tokenization in Latin America. Our goal is to transform the traditional methods of buying, selling, and managing assets by harnessing the potential of blockchain technology.</div>
            </div>
            <div className="mission-container">
                <div className="mission-container-text">
                    <h3>Our Mission</h3>
                    <div className='mission-container-inner'>Our mission is to democratize access to investment opportunities in real-world assets. We are committed to providing a transparent, secure, and efficient platform that enables investors to diversify their portfolios and access new markets.</div>
                </div>
                <div className="mission-container-img"><img src="data:image/jpeg;base64,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" alt="" /></div>
            </div>
            <div className='custom-dashboard'>
                <div className='custom-dashboard-first'>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <h3>Custom Dashboards for Enhanced Management</h3>
                    <div>Efficiently manage your tokenized assets, streamline payouts, and empower your NFT holders. With real-time performance tracking, transparent communication, and seamless payout management, you can optimize operations and provide a superior experience for all stakeholders.</div>
                </div>
                <div className='custom-dashboard-second'>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <h3>Custom Dashboards for Enhanced Management</h3>
                    <div>Efficiently manage your tokenized assets, streamline payouts, and empower your NFT holders. With real-time performance tracking, transparent communication, and seamless payout management, you can optimize operations and provide a superior experience for all stakeholders.</div>
                </div>
            </div>
            <div className="teams">
                <h1>Our Team</h1>
                <div className="team-cards">
                    {teamMembers.map((member, index) => (
                        <div className="card" key={index}>
                            <img src={member.iconUrl} alt={`${member.name} icon`} className="icon" />
                            <h2>{member.name}</h2>
                            <p>{member.designation}</p>
                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div>
                <img src = "C:\Repos\Personal GitHub\Wezys-Website\wenzys-app\src\assets\horizontal-timeline-infographic.png" ></img>
            </div> */}
        </div>
    )
}

export default Company;