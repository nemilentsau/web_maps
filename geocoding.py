import pandas as pd
import geopy
import ssl
import json
from geopy.geocoders import Nominatim, GoogleV3
from create_geojson import pandas_to_geojson
ssl._create_default_https_context = ssl._create_unverified_context

if __name__ == '__main__':
    data = pd.read_csv('data/census.csv')
    data['address'] = data['Area_Name'] + ' London United Kingdom'
    geocoder = Nominatim(user_agent="test", timeout=5)
    #geocoder = GoogleV3()
    area_coordinates = data['address'].apply(geocoder.geocode)
    data['latitude'] = area_coordinates.apply(lambda x: x.latitude)
    data['longitude'] = area_coordinates.apply(lambda x: x.longitude)


with open('data/census_json.geojson', 'w') as f:
    json.dump(pandas_to_geojson(data), f)
