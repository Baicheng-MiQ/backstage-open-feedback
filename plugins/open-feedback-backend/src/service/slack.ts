import { SubmitFeedback } from '@baicheng-michael/backstage-plugin-open-feedback-common';

export async function sendFeedbackToSlack(feedback: SubmitFeedback, slackWebhookUrl: string) {
    const { rating, url, comment } = feedback;
    const payload = {
      text: 'New feedback received!',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*:speech_balloon: You received a new Backstage feedback*',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Rating: ` + ':star: '.repeat(rating) + '\n' + `> Comment: ${comment}`
          },
          accessory: {
            type: 'image',
            image_url: 'https://backstage-spotify-com.spotifycdn.com/_next/static/media/twitter-summary-default.e17fd878.png',
            alt_text: 'feedback screenshot or backstage logo',
          },
        },
        {
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"text": `${url}`,
					"emoji": true
				}
			]
		},
      ],
    };
  
    try {
        await fetch(slackWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            });
    } catch (error) {

    }
  }