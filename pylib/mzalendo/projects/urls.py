from django.conf.urls.defaults import patterns, include, url, handler404

import views

urlpatterns = patterns('',
    url(r'^in/(?P<slug>[-\w]+)/', views.in_place, name='project_in_place'),
)
