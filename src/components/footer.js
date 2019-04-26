import React from 'react'
class MainFooter extends React.Component {
    render () {
        return (
            <div style={{width:`100%`}}>
                <div className="footer_divide">
                </div>
                <div className="Main_footer_div ">
                   <div className="footer_title">
                       <p>Contact</p>
                   </div>
                    <div className="footer_content">
                        <p >Durite USA LLC</p>
                        <p>15- Cutter Mill Road, # 126</p>
                        <p>Great Neck, NY 11023</p>
                        <a href="mailto:info@argosyproductdivision.com">info@durite.net</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainFooter;