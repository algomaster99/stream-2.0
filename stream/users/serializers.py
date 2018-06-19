from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=False)

    def create(self, validated_data):
        if validated_data['password'] == validated_data['confirm_password']:
            user = get_user_model().objects.create(
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
                username=validated_data['username'],
                is_active=False,
            )
            user.set_password(validated_data['password'])
            user.save()
            return user
        else:
            raise serializers.ValidationError("Passwords don't match")

    class Meta:

        model = get_user_model()
        fields = ('first_name', 'last_name', 'username', 'password', 'confirm_password')
