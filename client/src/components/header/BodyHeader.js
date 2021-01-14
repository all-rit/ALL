import React from 'react';

const Header = (props) => {
    const {lab, body} = props;

    return(
        <section className="page-section" style={{ paddingBottom: "25px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <br />
                        <br />
                        <h2 className="section-heading text-uppercase">
                            {lab}: {body}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Header;