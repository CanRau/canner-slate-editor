import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Editor from "./components/canner-slate-editor";
import MdEditor from "./components/markdown-editor";
import QuillIcons from "./components/quill-icons";
import Sidebar from "./components/sidebar";
import Toolbar from "./components/toolbar";

storiesOf("canner-slate-editor", module).add("Simple", () => <Editor />);

storiesOf("slate-md-editor", module).add("Simple", () => <MdEditor />);

storiesOf("Quill icons", module).add("List", () => <QuillIcons />);

storiesOf("sidebar", module).add("Simple", () => <Sidebar />);

storiesOf("toolbar", module).add("Simple", () => <Toolbar />);

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
