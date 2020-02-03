import pandas as pd
import json


def pandas_to_geojson(df):
    geojson = {"type": "FeatureCollection", 'features':[]}
    for index, row in df.iterrows():
        feature_dict = {"type":"Feature"}
        feature_dict['properties'] = row.drop(['latitude', 'longitude']).to_dict()
        feature_dict['geometry'] = {"type":"Point", "coordinates":list(row[['longitude', 'latitude']])}
        geojson['features'].append(feature_dict)
    return geojson





