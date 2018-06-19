from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json

class StreamConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = 'stream'
        self.room_group_name = self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        url = text_data_json['url']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'media_url',
                'url': url
            }
        )

    # Receive message from room group
    def media_url(self, event):
        url = event['url']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'url': url
        }))
