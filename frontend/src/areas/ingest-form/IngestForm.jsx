import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  Radio,
  Row,
  Select,
  TimePicker,
  Tooltip
} from "antd";

import CheckboxGroup from "antd/lib/checkbox/Group";
import CurrentTime from "../../components/CurrentTime";
import RadioGroup from "antd/lib/radio/group";
import React from "react";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

const painList = [
  "head",
  "nose",
  "throat",
  "leg",
  "arm",
  "shoulder",
  "stomach"
];
const painLocationOptions = painList.map(i => {
  return { label: i, value: i };
});

const medsList = [
  "Hydrocodone",
  "Morphine",
  "Percocet",
  "Codeine",
  "Methadone"
];
const painMedicationOptions = medsList.map(i => {
  return { label: i, value: i };
});

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Change of Shift Form</h1>
        <Form.Item {...formItemLayout} label="Time">
          {getFieldDecorator("time", {
            rules: [
              {
                required: true,
                message: "Make sure the to verify the timestamp!"
              }
            ]
          })(
            <React.Fragment>
              Verified to be <CurrentTime />
              ? &emsp;
              <Checkbox />
            </React.Fragment>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Outgoing Nurse">
          {getFieldDecorator("outgoingNurse", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<Input placeholder="Me" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Incoming Nurse">
          {getFieldDecorator("incomingNurse", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<Input placeholder={"Alice W."} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Patient">
          {getFieldDecorator("patient", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<AutoComplete />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Doctor">
          {getFieldDecorator("doctor", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<AutoComplete />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Symptoms">
          {getFieldDecorator("symptoms", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<AutoComplete />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Last Surgery Date">
          {getFieldDecorator("lastSurgery", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<DatePicker />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Status">
          {getFieldDecorator("status", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(
            <Radio.Group intialValue="b" buttonStyle="solid">
              <Radio.Button value="a">good</Radio.Button>
              <Radio.Button value="b">fair</Radio.Button>
              <Radio.Button value="c">bad</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Status Details">
          {getFieldDecorator("details")(<TextArea />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Vital State">
          {getFieldDecorator("vitalState", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(
            <Radio.Group intialValue="a" buttonStyle="solid">
              <Radio.Button value="a">q4°</Radio.Button>
              <Radio.Button value="b">q2°</Radio.Button>
              <Radio.Button value="c">q30”</Radio.Button>
              <Radio.Button value="d">q15”</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Vitals Last Taken at">
          {getFieldDecorator("vitalsTaken", {
            rules: [
              {
                required: true,
                message: "Please enter the appropriate value."
              }
            ]
          })(<TimePicker use12Hours />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Pain Locations">
          {getFieldDecorator("painLocations")(
            <CheckboxGroup
              options={painLocationOptions}
              //   defaultValue={[]}
              //   onChange={onChange}
            />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Pain Medications">
          {getFieldDecorator("painMedications")(
            <CheckboxGroup
              options={painMedicationOptions}
              //   defaultValue={[]}
              //   onChange={onChange}
            />
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);
export default WrappedRegistrationForm;
