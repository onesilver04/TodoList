# Make TodoList using REACT

React 혼자 해보기

first React Toy Project

## .css

모든 .css파일들은 각 이름에 맞는 .js의 스타일을 지정하는 코드를 담은 파일들임

## Form.js

'추가'버튼 작동

## TodoItem.js

개별 todo 항목 표시

각 항목 클릭 시 실선이 그어지며 해당 과제를 완료했다는 표시를 가능하게 함

### const { text, checked, id, onToggle, onRemove } = this.props;

text: 투두 항목의 텍스트 내용

checked: 이 항목이 완료되었는 지 여부(true/false)

id: 투두 항목의 고유한 ID

onToggle: 체크박스를 토글(완료 상태 변경)하는 함수

onRemove: 항목을 삭제하는 함수

## TodoItemList.js

TodoItem.js를 import

리스트 관리

## TodoListTemplate.js

전체적인 틀

TodoListTemplate.css에 거의 모든 디자인이 들어 있음
