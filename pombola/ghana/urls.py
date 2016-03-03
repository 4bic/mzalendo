from django.conf.urls import url, include

from .views import data_upload, info_page_upload


urlpatterns = [
    url(r'^data/upload/mps/$', data_upload, name='data_upload'),
    url(r'^data/upload/info-page/$', info_page_upload, name='info_page_upload'),
    url('', include('django.contrib.auth.urls')),
]
