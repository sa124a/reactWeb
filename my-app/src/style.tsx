import styled from 'styled-components'; // 引入styled-components库,实例化styled对象

// 声明样式ButtonA组件,通过styled对象进行创建,注意styled.html元素,后面是反引号
export const ButtonA = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 3px;
    outline: none;
    border: none;
    cursor: pointer;
    background: #abcdef;
    color: #fff;
`;
export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
