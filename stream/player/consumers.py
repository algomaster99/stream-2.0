from channels.generic.websocket import AsyncWebsocketConsumer
import json

class StreamConsumer(AsyncWebsocketConsumer):
	async def connect(self):

		await self.channel_layer.group_add(
			"stream",
			self.channel_name			

		)
		await self.accept()

	async def disconnect(self, close_code):
		await self.channel_layer.group_discard(
			"stream",
			self.channel_name
		)

	async def receive(self, text_data):
		text_data_json = json.loads(text_data)
		url = text_data_json['url']
		play = text_data_json['play']
		mute = text_data_json['mute']
		duration = text_data_json['duration']
		seek = text_data_json['seek']
		volume = text_data_json['volume']

		await self.channel_layer.group_send(
			"stream",
			{
				'type': 'web_stream',
				'url': url,
				'play': play,
				'mute': mute,
				'duration': duration,
				'seek': seek,
				'volume': volume,
			}
		)

	async def web_stream(self, event):
		url = event['url']
		play = event['play']
		mute = event['mute']
		duration = event['duration']
		seek = event['seek']
		volume = event['volume']

		await self.send(text_data=json.dumps({
				'url': url,
				'play': play,
				'mute': mute,
				'duration': duration,
				'seek': seek,
				'volume': volume,
		}))
