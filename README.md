<p align="center">
<img align="center" height="150" src="https://user-images.githubusercontent.com/43678736/132112022-0ca409ae-cca2-43c8-be89-110376260a3f.png" alt="dropone-ui-logo">

<h1 align="center">  Dropzone UI </h1>

</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/dropzone-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/dropzone-ui.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/dropzone-ui)
[![dependencies Status](https://status.david-dm.org/gh/dropzone-ui/dropzone-ui.svg)](https://david-dm.org/dropzone-ui/dropzone-ui)
[![Build Status](https://app.travis-ci.com/dropzone-ui/dropzone-ui.svg?branch=master)](https://app.travis-ci.com/dropzone-ui/dropzone-ui)
[![install size](https://packagephobia.com/badge?p=dropzone-ui)](https://packagephobia.com/result?p=dropzone-ui)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/dropzone-ui/badge.svg)](https://snyk.io/test/github/dropzone-ui/dropzone-ui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Description

Dropzone UI is a mini set of [React](https://reactjs.org/) components for managing file uploads, image previews and all with **little** code needed. Components were made inspired on other existing libraries (however, those are **not** dependencies in order avoid increasing the package size and the idea is to **create** something **new** having many good existing libraries only as **reference**). Also, some componetes follows some of the good google's Material design principles. Indeed, all the icons involved are google material design icons.

## Sample result:

On `Drag`, `Drop` and `Upload`. (also changing view mode from `grid` to `list`)

<p align="center">
<img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642335-dc7e7ceb-ae86-4f81-8625-4ee28dc5f593.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642336-e295d84d-d950-43b2-b9fc-0529b4ecfe46.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642339-2cd996a3-7754-46c9-89ed-56291972154f.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642341-b1eb2bfe-8134-4cdf-a808-62b14058b4c1.png" alt="dropone-ui-logo">

</p>

## Installation

dropzone-ui is available as an [npm package](https://www.npmjs.com/package/dropzone-ui).

For uploading files, peer dependency [axios](https://www.npmjs.com/package/axios) must be installed together

```sh
// with npm
npm i dropzone-ui axios
```

```sh
// with yarn
yarn add dropzone-ui axios
```

## Usage and examples

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "dropzone-ui";
Function App() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileItem {...file} preview />
      ))}
    </Dropzone>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

Yes, it's really all you need to get started as you can see in these live and interactive demos:
| Name | Codesandbox |
|-|-|
|Dropzone Basic example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-3j01v?file=/src/index.js)|
|Dropzone Complete example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/complete-946hz?file=/src/index.js)|
|File item props|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fileitem-props-o0w5x)|
|No preview FileItem|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/no-preview-14i2m) | 
|InputFileButton|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inputbutton-example-poqsn?file=/src/App.js)|
|Server side upload file | https://github.com/dropzone-ui/file-upload-server-side/tree/main/expressjs |

# Dropzone UI Components API

- [\<Dropzone/>](#dropzone-api)
- [\<FileItem />](#fileitem-api)
- [\<FullScreenPreview />](#fullscreenpreview-api)
- [\<FileItemContainer />](#fileitemcontainer-api)
- [\<InputButton />](#inputbutton-api)

## Dropzone API

### Props

| Name          | Type                             | Default                                                   | Description                                                                                                                                                                                          |
| ------------- | -------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept        | `string`                         | `undefined`                                               | The default implementation of accept checks the file's mime type or extension against this list. This is a comma separated list of mime types or file extensions. Eg.: image/\*,application/pdf,.psd |
| behaviour     | `"add"` \| `"replace"`           | `"add"`                                                   | The behaviuor on drop files. `"add"` option will make `Dropzone` to add new dropped files. `"replace"` option will make `Dropzone` to replace the current list of files                              |
| children      | `node`                           | `true`                                                    | The content of he component. Normally a list of `FileItem` or a label                                                                                                                                |
| clickable     | `boolean`                        | `true`                                                    | If true, the dropzone component itself will be clickable                                                                                                                                             |
| config        | Object                           | { headers: { "content-type": "multipart/form-data;", }, } | Extra configuration for uploading, normally an object with headers or bearer token-                                                                                                                  |
| fakeUploading | `boolean`                        | `undefined`                                               | If true, this flag will make dropzone to simulate a server upload. Use only in development.                                                                                                          |
| footer        | `boolean`                        | `true`                                                    | if true, shows the dropzone footer                                                                                                                                                                   |
| header        | `boolean`                        | `true`                                                    | if true, shows the dropzone header                                                                                                                                                                   |
| label         | `string`                         | "Drop your files here"                                    | Label to place when no files selected                                                                                                                                                                |
| method        | `"POST"` \| `"PUT"` \| `"PATCH"` | `"POST"`                                                  | The method for uploading.                                                                                                                                                                            |
| maxFiles      | `number`                         | 7                                                         | Max `number` of files to be accepted. If the value is 1, will click event dialog to allow just asingle file                                                                                          |
| maxFileSize   | `number`                         | `undefined`                                               | max file size allowed in bytes. if not preent, will not be considered on validating the file                                                                                                         |
| maxHeight     | `string`                         | "500px"                                                   | The max height of the container in string format. e.g. '50vh' , '20%', '40em', '1rem'                                                                                                                |
| onChange      | `Function`                       | `undefined`                                               | The onChange event occurs when the value of the file list is changed                                                                                                                                 |
| onChangeView  | `Function`                       | `undefined`                                               | Event that ocurs when view mode has changed. First parameter is the current view mode. the selected view mode                                                                                        |
| onDrop        | `Function`                       | `undefined`                                               | The onDrop event occurs when files are dropped indide the Dropzone. Normally used for retrieving the new files dropped                                                                               |
| uploadOnDrop  | `boolean`                        | `false`                                                   | If true, onDrop event will return the list of files, but also will upload the files if url was set, and also config                                                                                  |
| url           | `string`                         | `undefined`                                               | The url endpoint to upload the files                                                                                                                                                                 |
| validator     | (f: File) => boolean             | undefined                                                 | must be a function that recieves as first parameter a File Object and must return a boolean value. This function will be used instead of the default validator                                       |
| view          | `"grid"` \| `"list"`             | `"grid"`                                                  | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                                                     |
| value         | `FIleValidated[]`                | [ ]                                                       | The current list of Files                                                                                                                                                                            |

## FileItem API

### Props

| Name          | Type                                                     | Default     | Description                                                                                                                                                                                                                                                                                     |     |
| ------------- | -------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| file          | `File`                                                   | `undefined` | The actual file                                                                                                                                                                                                                                                                                 |
| hd            | `boolean`                                                | `undefined` | If present, preview on full screen will be presented in the real image resolution                                                                                                                                                                                                               |
| id            | `string` \| `number`                                     | `undefined` | identifier for the file                                                                                                                                                                                                                                                                         |
| info          | `boolean`                                                | `false`     | If present, the info layer and the info button will ve visible                                                                                                                                                                                                                                  |
| onDelete      | `Function`                                               | `undefined` | A `Function` of what to do when close button is pressed or clicked                                                                                                                                                                                                                              |
| onSee         | `Function`                                               | `undefined` | A `Function` of what to do when "see" button is pressed or clicked. Returns as first parameter the image url. If `hd` present, will return the image url in the real quality. Otherwise, will return a minimized image with less resolution in order to save memory.                            |
| preview       | `boolean`                                                | `false`     | If present, and if `onSee` present, "see" button will be visible and on click will trigger `onSee` function                                                                                                                                                                                     |
| uploadMessage | `string`                                                 | `undefined` | The message to display when server responds                                                                                                                                                                                                                                                     |
| uploadStatus  | `undefined` \| `"uploading"` \| `"success"` \| `"error"` | `undefined` | The status of the upload process                                                                                                                                                                                                                                                                |
| valid         | `boolean`                                                | `false`     | whether to show a "valid" or "rejected" message ("valid", "denied"). By default valid is `false` (if not present, it's `false` too)This value will affect preview behaviour. If not valid, the preview will not be shown, nor the view button even when `onSee` and `preview` props are present. To make a preview despite of the image file in not valid, is a feaure that will be added in future releases. |

## FullScreenPreview API

### Props

| Name      | Type       | Default     | Description                                   |
| --------- | ---------- | ----------- | --------------------------------------------- |
| imgSource | `string`   | `undefined` | The url string representation of the image    |
| onClose   | `Function` | `undefined` | A function that describes the close behaviour |
| openImage | `boolean`  | `false`     | Flag that indicates whether to open the image preview or close it             |

## FileItemContainer API

### Props

| Name     | Type                 | Default  | Description                                                                                                                                                          |
| -------- | -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children | `node`               | `true`   | The content of he component. Normally a list of `FileItem`. By default `Dropzone` component already uses this component for containing the `FileItem` list children. |
| view     | `"grid"` \| `"list"` | `"grid"` | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                     |

## InputButton API

### Props

| Name        | Type                                                         | Default        | Description                                                                                                                                                    |
| ----------- | ------------------------------------------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept      | `string`                                                     | `undefined`    | The list of mimetypes and extensions of files to accept. This is a comma separated list of mime types or file extensions. Eg.: image/\*,application/pdf,.psd   |
| color       | `string`                                                     | `"#071e25"`    | The main color for the button. (e.g. "#FFFFFF", "rgb(255,12,45)")                                                                                              |
| disabled    | `boolean`  |  `false`    | whether the button will be disabled or not                                                                                                                     |
| id          | `string`                                                     | `undefined`    | the id of the component                                                                                                                                        |
| label       | `string`                                                     | "Browse ..."   | If given, this label will be shwed inside the button                                                                                                           |
| maxFileSize | `number`                                                     | `undefined`    | max file size allowed in bytes                                                                                                                                 |
| multiple    | `boolean`                                                    | `false`        | whether to accept multiple files or not                                                                                                                        |
| onChange    | `Function`                                                   | `undefined`    | What to do after selecting the files. Returns the File[] to the parent component                                                                               |
| style       | `React.CSSProperties`                                        | {}             | the in-line style object                                                                                                                                       |
| text        | `"uppercase"` \| `"capitalize"` \| `"lowercase"` \| `"none"` | `"capitalize"` | The text transform for the text inside the button label                                                                                                                         |
| textColor   | `string`                                                     | "white"        | The font color in case variant is `"contained"`                                                                                                                |
| validator   | (f: `File`) => `boolean`                                     | `undefined`    | Must be a function that recieves as first parameter a File Object and must return a boolean value. This function will be used instead of the default validator |
| variant     | `"text"` \| `"outlined"` \| `"contained"`                    | `"contained"`  | The variant of the button                                                                                                                                      |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
