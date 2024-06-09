import time
from pymongo import MongoClient
from pymongo.errors import BulkWriteError

# 连接到MongoDB
MONGODB_URI = 'mongodb+srv://lancy:Adelaidezlx.@lancy.sca2sna.mongodb.net/codeinsight'  # 例如 'mongodb://username:password@host:port/database'
client = MongoClient(MONGODB_URI)
db = client.test_database
collection = db.test_collection

# 插入测试数据
def insert_documents(batch_size):
    try:
        documents = [{'name': 'test', 'value': i} for i in range(batch_size)]
        start_time = time.time()
        collection.insert_many(documents, ordered=False)
        end_time = time.time()
        return end_time - start_time
    except BulkWriteError as bwe:
        print(f'Bulk write error: {bwe.details}')
        return None

# 读取测试数据
def read_documents(batch_size):
    try:
        start_time = time.time()
        documents = list(collection.find().limit(batch_size))
        end_time = time.time()
        return end_time - start_time
    except Exception as e:
        print(f'Error reading documents: {e}')
        return None

# 测试写入和读取性能
def test_performance(write_batch_size, read_batch_size, duration):
    total_writes = 0
    total_reads = 0
    write_time = 0
    read_time = 0

    end_time = time.time() + duration
    while time.time() < end_time:
        write_duration = insert_documents(write_batch_size)
        if write_duration is not None:
            total_writes += write_batch_size
            write_time += write_duration

        read_duration = read_documents(read_batch_size)
        if read_duration is not None:
            total_reads += read_batch_size
            read_time += read_duration

    avg_write_latency = write_time / total_writes if total_writes > 0 else float('inf')
    avg_read_latency = read_time / total_reads if total_reads > 0 else float('inf')

    print(f'Total writes: {total_writes}')
    print(f'Total reads: {total_reads}')
    print(f'Average write latency: {avg_write_latency * 1000:.2f} ms')
    print(f'Average read latency: {avg_read_latency * 1000:.2f} ms')

if __name__ == "__main__":
    write_batch_size = 1000  # 每批写入的文档数
    read_batch_size = 1000   # 每批读取的文档数
    test_duration = 60      # 测试时长，单位：秒

    # 清空集合
    collection.drop()

    test_performance(write_batch_size, read_batch_size, test_duration)
