import React from 'react';

function format(text) {
    return text != null ? text : '';
}

function unformat(text) {
    return text.trim().length === 0 ? null : text; //.trim() removes any whitespace
}

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: format(props.value) };
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    onBlur(e) {
        const { onChange } = this.props;
        const { value } = this.state;
        onChange(e, unformat(value));
    }

    render() {
        const { value } = this.state;
        const { tag = 'input', ...props } = this.props; //Since the spread operator comes after tag, it will override it if tag is one of the properties (As is the case with textarea)
        return React.createElement(tag, {
            ...props,
            value,
            onBlur: this.onBlur,
            onChange: this.onChange,
        });
    }
}