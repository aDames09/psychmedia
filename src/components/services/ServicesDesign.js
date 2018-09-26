import React, { Component } from 'react';
//import devIcon from '../../images/Development.png';
import { ServicesDiv, ServicesItems, ServicesItem } from '../../theme/Grid';
import  { ServicesTitle, ServicesSubtitle, ServicesText, ServicesItemTitle } from '../../theme/Type';
import { Button } from 'mdbreact';
import devIcon from '../../images/Bantam-Media-Template.png';

class ServicesDesign extends Component {
	render() {
		return (
      <ServicesDiv>

        <div className="row alignCenter">

        <div className="col-6 col-md-4">

          <img src={devIcon} className="servicesImg" alt="Psych Media"/>

          <Button size="lg" gradient="blue">
          More Info
          </Button>
          <Button size="lg" gradient="purple">
          Request a Quote
          </Button>
        </div>
        <div className="col col-md-8">

        <ServicesTitle>DESIGN</ServicesTitle>
        <ServicesText>
        We create graphics that perfectly suit your needs. Establishing a brand identity can be the most crucial part of any development
project! We also design presentations, infographics, and digital banner ads.
        </ServicesText>

        <ServicesSubtitle>Print Design</ServicesSubtitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							BUSINESS CARDS
						</ServicesItemTitle>
						<ServicesText>
							Stand out from the rest with a thought out design.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							LETTERHEAD & ENVELOPES
						</ServicesItemTitle>
						<ServicesText>
							Fully brand your company with your own custom style.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							POSTCARDS & BROCHURES
						</ServicesItemTitle>
						<ServicesText>
							Supplement your business with informative designs.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
					</ServicesItem>
        </ServicesItems>

        <ServicesSubtitle>Website & Email Design</ServicesSubtitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							WEBSITE DESIGN
						</ServicesItemTitle>
						<ServicesText>
							Take your business to the next level with great UI/UX.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							LOGOS & BRANDING
						</ServicesItemTitle>
						<ServicesText>
							Graphic design that best suits your image and name.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							EMAIL DESIGN
						</ServicesItemTitle>
						<ServicesText>
							Make sure your messages are displayed in the best manner.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
					</ServicesItem>
        </ServicesItems>

        <ServicesSubtitle>Advertising & Commercial Design</ServicesSubtitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							BANNER & DISPLAY ADS
						</ServicesItemTitle>
						<ServicesText>
							Guarantee that you catch your audience’s attention.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							SOCIAL MEDIA ADVERTISEMENTS
						</ServicesItemTitle>
						<ServicesText>
							Attract the most clicks with appealing design.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							SIGNAGE & PACKAGING
						</ServicesItemTitle>
						<ServicesText>
							Don’t forget about retail displays or product packaging!
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
					</ServicesItem>
        </ServicesItems>

        </div>
</div>
      </ServicesDiv>

    );
	}
}

export default ServicesDesign;
