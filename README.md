# Demo



https://github.com/user-attachments/assets/9ab670bb-eeb0-4f93-a9f1-b713ba4d3416



# Sử dụng

- custome hooks
  - uesDelay: Chức năng tương tự như hooks useDebounce.
    - Dùng để trì hoãn quá trình gọi một hành động nào đó khi người dùng nhập liệu trong input
    - Giá trị khởi tạo
      - `defaultValue`: giá trị mặc định
      - `delayMillis`: Thời gian nghỉ khi giá trị thay đổi, nếu giá trị thay đổi sau đó nó không bị thay đổi nữa sau `delayMillis` millisecond thì `onChange` sẽ được thực thi
      - `onChange`: hàm này được gọi khi giá trị thay đổi và sau đó không bị thay đổi nữa sau `delayMillis` millisecond, nó nhận một đối số là giá trị hiện tại
  - useQuery
    - Dùng để thực thi một hàm bất đồng bộ
    - Giá trị khởi tạo của hooks
      - `asyncCallBack`: Hàm bất đồng bộ, sẽ được gọi khi thực hiện query
      - `isNow`: Cho biết có thực hiện query ngay lập tức hay không
    - Giá trị trả về của hooks này gồm
      - `loading`: cho biết có đang trong quá trình thực thi hàm bất đồng bộ hay không
      - `response`: kết quả trả về khi thực thi hoàn tất
      - `query`: một function, khi gọi sẽ thực thi `asyncCallBack`
      - `query2`: một function, cần truyền vào nó một `hàm bất đồng bộ` làm đối số khi gọi sẽ thực thi `hàm bất đồng bộ được truyền vào`
