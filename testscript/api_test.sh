#!/bin/bash

# Define URLs to test
urls=(
    "http://localhost:3000/api/auth"
    "http://localhost:3000/api/submits"
)

# Function to test API with Apache Benchmark
function testApi() {
    local url=$1
    local num_requests=$2
    local concurrency_level=$3
    echo "Testing $url with concurrency level $concurrency_level and $num_requests requests"

    # Run Apache Benchmark and extract total time taken
    result=$(ab -n $num_requests -c $concurrency_level "$url" 2>&1)
    echo "$result"

    # Extract total time taken from the result
    total_time=$(echo "$result" | grep "Time taken for tests" | awk '{print $5}')
    echo "Total time taken: $total_time seconds"

    # Calculate requests per second
    if [ -n "$total_time" ]; then
        requests_per_second=$(echo "$num_requests / $total_time" | bc)
        echo "Requests per second: $requests_per_second"
    fi
    echo
}

# Loop through URLs to test each one with different concurrency levels
for url in "${urls[@]}"
do
    testApi "$url" 2000 150
done
