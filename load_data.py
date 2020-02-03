import csv
import ssl
import urllib.request

ssl._create_default_https_context = ssl._create_unverified_context

url = 'https://programminghistorian.org/assets/mapping-with-python-leaflet/census.csv'
response = urllib.request.urlretrieve(url, 'data/census.csv')
