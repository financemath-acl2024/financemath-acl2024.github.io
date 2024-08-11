import csv
import json

# Define the input CSV file path and the output JS file path
input = 'test'

input_csv_path = f"static/data/{input}.csv"
output_js_path = f"static/js/model_scores_{input}.js"

# Function to convert strings to floats where possible
def convert_value(value):
    try:
        return float(value)
    except ValueError:
        return value

# Read the CSV file
with open(input_csv_path, mode='r', encoding='utf-8-sig') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    
    # Initialize a dictionary for the data
    data = {}
    
    # Populate the dictionary with rows indexed by row number
    for idx, row in enumerate(csv_reader, start=1):
        # Convert each value in the row to a float if possible
        converted_row = {key: convert_value(value) for key, value in row.items()}
        data[str(idx)] = converted_row

# Convert the dictionary to a formatted string
js_content = f"{input}_score_table = {json.dumps(data, indent=2)};\n"

# Write the JS file
with open(output_js_path, mode='w', encoding='utf-8') as js_file:
    js_file.write(js_content)

print(f"CSV data successfully converted to {output_js_path}")