import React, { Component } from 'react';

//import devIcon from '../../images/Development.png';
import { ServicesDiv } from '../../theme/Grid';
import  { Title, AboutDesc, ServicesTitle, ServicesText } from '../../theme/Type';

class Marketing extends Component {
	render() {
		return (
      <ServicesDiv>

        <Title>Marketing & Advertising</Title>

<AboutDesc>Psych Media offers comprehensive marketing services to suit your needs. Whether you need hands on content creation and management or strategy oversight and training, our attentive marketing strategists are ready to listen and deliver.
</AboutDesc>

<ServicesTitle>SEO & Paid Advertising</ServicesTitle>
<ServicesItems>
	<ServicesItem>
		<ServicesItemTitle>
			SEARCH ENGINE OPTIMIZATION
		</ServicesItemTitle>
		<ServicesText>
			Reach your audience when they search for your services.
		</ServicesText>
	</ServicesItem>
	<ServicesItem>
		<ServicesItemTitle>
			GOOGLE ANALYTICS
		</ServicesItemTitle>
		<ServicesText>
			Analyze traffic to locate strengths and weaknesses.
		</ServicesText>
	</ServicesItem>
	<ServicesItem>
		<ServicesItemTitle>
			KEYWORD RESEARCH
		</ServicesItemTitle>
		<ServicesText>
			The low down on top search terms related to your site.
		</ServicesText>
	</ServicesItem>
	<ServicesItem>
		<ServicesItemTitle>
			PPC ADVERTISING SETUP
		</ServicesItemTitle>
		<ServicesText>
			Adwords setup and configuration – save yourself the headaches.
		</ServicesText>
	</ServicesItem>
	<ServicesItem>
		<ServicesItemTitle>
			ADWORDS MANAGEMENT
		</ServicesItemTitle>
		<ServicesText>
			Manage paid-per-click campaigns to get bang for your buck.
		</ServicesText>
	</ServicesItem>
	<ServicesItem>
		<ServicesItemTitle>
			ADVANCED PPC REPORTING
		</ServicesItemTitle>
		<ServicesText>
			What does all of your data really mean? Let’s strategize!
		</ServicesText>
	</ServicesItem>
</ServicesItems>

        <ServicesTitle>Email & Social Outreach</ServicesTitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							SOCIAL PROFILE SETUP
						</ServicesItemTitle>
						<ServicesText>
							Launch your social media profiles properly and with a pop.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							SOCIAL MEDIA MANAGEMENT
						</ServicesItemTitle>
						<ServicesText>
							Gain exposure by creating and scheduling quality posts.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							SOCIAL MEDIA ADVERTISING
						</ServicesItemTitle>
						<ServicesText>
							Take advantage of growing markets and run paid ads.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							INFLUENCER MARKETING
						</ServicesItemTitle>
						<ServicesText>
							Reach out to top producers in your industry.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							AFFILIATE MARKETING
						</ServicesItemTitle>
						<ServicesText>
							Partner with companies to grow your business.
						</ServicesText>
					</ServicesItem>
				</ServicesItems>

        <ServicesTitle>Enrich Your Content</ServicesTitle>
				<ServicesItems>
					<ServicesItem>
						<ServicesItemTitle>
							CONTENT STRATEGY
						</ServicesItemTitle>
						<ServicesText>
							Deliver focused content that’s useful to your targeted audience.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							BLOG WRITING
						</ServicesItemTitle>
						<ServicesText>
							Assistance editing or writing creative material for your site.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
						<ServicesItemTitle>
							CONTENT COPYWRITING
						</ServicesItemTitle>
						<ServicesText>
							Develop keyword rich verbiage for your site to optimize for SEO.
						</ServicesText>
					</ServicesItem>
					<ServicesItem>
					</ServicesItem>
        </ServicesItems>



      </ServicesDiv>

    );
	}
}

export default Marketing;
