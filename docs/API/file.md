# File

```
import { File } from "pi_pt/native/pi_core_lib/js_file";

const file = File.walk_dir_sync("./test");
File.fs_write_file(`./backout_data/${lastversion}_${Date.now()}`, utf8Encode(fileBody));
```

## fs_access

判断文件/目录是否存在

```
fs_access(path: string): boolean
```

## fs_rename

重命名文件

```
async fs_rename(from: string, to: string): Promise<boolean>
```

## fs_stat_is_read_only

获取文件是否只读

```
fs_stat_is_read_only(path: string): boolean
```

## fs_stat_ftype

文件类型 普通文件为1，目录为2，符号链接为3

```
fs_stat_ftype(path: string): number
```

## fs_stat_size

文件的大小

```
fs_stat_size(path: string): number
```

## fs_stat_last_accessed_time

获取数据的最后访问时间，UNIX 时间戳，对应 POSIX stat.st_mtime

```
fs_stat_last_accessed_time(path: string): number
```

## fs_stat_last_modified_time

文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime

```
fs_stat_last_modified_time(path: string): number
```

## fs_mkdir

创建目录

```
async fs_mkdir(path: string): Promise<boolean>
```

## fs_readdir

读取目录内文件列表

```
fs_readdir(dir: string): string
```

## fs_rmdir

删除目录

```
async fs_rmdir(path: string): Promise<boolean>
```

## fs_read_file_string

读取本地文件内容(utf8)

```
async fs_read_file_string(path: string, offset: number|bigint, size: number|bigint): Promise<string> 
```

## fs_read_file_binary

读取本地文件内容(二进制)

```
async fs_read_file_binary(path: string, offset: number|bigint, size: number|bigint): Promise<ArrayBuffer|SharedArrayBuffer|Uint8Array|ArrayBufferView>
```

## fs_write_file

写文件

```
async fs_write_file(path: string, data: ArrayBuffer|SharedArrayBuffer|Uint8Array|ArrayBufferView): Promise<number|bigint>
```

## fs_append_file

在文件结尾追加内容

```
async fs_append_file(path: string, data: ArrayBuffer|SharedArrayBuffer|Uint8Array|ArrayBufferView): Promise<number|bigint> 
```

## fs_copy_file

复制文件

```
async fs_copy_file(src_path: string, dest_path: string): Promise<number|bigint>
```

## fs_unlink

删除文件

```
async fs_unlink(path: string): Promise<boolean>
```

## walk_dir_sync

步递归遍历目录的所有文件

```
walk_dir_sync(path: string): string
```
