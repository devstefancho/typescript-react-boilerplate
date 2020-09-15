import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hello World!{" "}
    <p>
      {props.userName} from React! Welcome to {props.lang}!
    </p>
  </h1>
);
