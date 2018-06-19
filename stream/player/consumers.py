from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json

class PlayerConsumer(WebsocketConsumer):
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
        label = text_data_json['label']
        volume = text_data_json['volume']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'label': label,
                'volume': volume
            }
        )

    # Receive message from room group
    def chat_message(self, event):
        label = event['label']
        volume = event['volume']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'label': label 
        }))
