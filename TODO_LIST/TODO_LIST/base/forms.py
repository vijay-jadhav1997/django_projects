from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms


class UserSignupForm(UserCreationForm):
  email = forms.EmailField(max_length=200, required=True, widget=forms.EmailInput(attrs={'placeholder':'example2024@gmail.com'}) )

  class Meta:
    model = User
    fields = ('username', 'email', 'password1', 'password2',)
    labels = {
      'password1': 'Password',
      'password2': 'Password confirmation',
    }
    # widgets = {
    #   'username' : forms.TextInput(attrs={'placeholder':'dharm_raj'}),
    #   'password1' : forms.PasswordInput(attrs={'placeholder':'Indian@₹25'}),
    # }


