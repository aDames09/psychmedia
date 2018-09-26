import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import devIcon from '../../images/Bantam-Media-Template.png';
import { ServicesDiv, ServicesItems, ServicesItem } from '../../theme/Grid';
import { Button } from 'mdbreact';
import  { ServicesTitle, ServicesSubtitle, ServicesText, ServicesItemTitle } from '../../theme/Type';
import { Link } from 'react-router-dom';

class ServicesDev extends Component {
	render() {
		return (
      <ServicesDiv>

        <ServicesTitle>DEVELOPMENT</ServicesTitle>
        <div className="row alignCenter">
        <div className="col col-md-8">
        <ServicesText>
        Psych Media is a full service agency that helps businesses best represent their brands across all digital platforms. We assist companies
        and individuals gain more traction and visibility by researching your market, assessing your competition, while analyzing
        your website trac and aligning your outreach campaigns with a consistent and targeted brand image.
        </ServicesText>
        <ServicesSubtitle>Website Development</ServicesSubtitle>
        <ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							ECOMMERCE WEBSITES
						</ServicesItemTitle>
						<ServicesText>
							Several options and platforms for your online store.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							MOBILE APPLICATIONS
						</ServicesItemTitle>
						<ServicesText>
							Create your own app – with or without our design.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							EMAIL CODING
						</ServicesItemTitle>
						<ServicesText>
							Make email designs a reality on your select platform.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							CONVERSION TRACKING
						</ServicesItemTitle>
						<ServicesText>
							Collect the right data to create an optimal strategy.
						</ServicesText>
					</ServicesItem>
        </ServicesItems>
        <ServicesSubtitle>Maintenance and Security</ServicesSubtitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							MONTHLY MAINTENANCE
						</ServicesItemTitle>
						<ServicesText>
							Keep up with updates so your website doesn’t go down.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							WEBSITE REPAIR
						</ServicesItemTitle>
						<ServicesText>
							Get your website back in working order, fast.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							WEBSITE SECURITY
						</ServicesItemTitle>
						<ServicesText>
							Secure your website and monitor malicious activity.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
					</ServicesItem>
        </ServicesItems>
        </div>
        <div className="col-6 col-md-4">
          <img src={devIcon} className="servicesImg" alt="Psych Media"/>
          <Link to="/services/development">
          <Button size="lg" gradient="blue" to="/services/development">
          More Info
          </Button>
          </Link>

          <Button size="lg" gradient="purple">
          Request a Quote
          </Button>
        </div>
        </div>
      </ServicesDiv>

    );
	}
}

export default ServicesDev;
