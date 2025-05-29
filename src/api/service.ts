interface ConfigService<K, V> {
   get(configKey: K): V;
}

interface DataService<K, V> {
   get(dataKey: K): V;
}