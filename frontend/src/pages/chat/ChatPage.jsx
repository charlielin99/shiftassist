import PageNavWrapper from "../PageNavWrapper/PageNavWrapper";
import React from "react";
import { Input } from 'antd';
import Messanger from './Messanger';
import { Button } from 'antd';

export default function ChatPage(props) {

  return (
    <PageNavWrapper>
      <div>
        <h1>Chat Page</h1>
        <Messanger />

        <form className="white">
          <Input placeholder="Basic usage"/>
          <p>  </p>
          <Button type="primary">Submit</Button>
        </form>
      </div>
    </PageNavWrapper>
  );
}
