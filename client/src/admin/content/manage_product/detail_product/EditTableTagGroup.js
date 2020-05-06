import React, {Component} from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import './css/EditTableTagGroup.css';

class EditableTagGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVisible: false,
            inputValue: '',
            editInputIndex: -1,
            editInputValue: '',
        }
    }

    handleClose = removedTag => {
       const { handleChangeTag, type, productAttributes } = this.props;
       const tags = productAttributes.length !== 0 ? productAttributes.find(item => item.name === type).value : [];
       const newTags = tags.filter(item => item !== removedTag);
       handleChangeTag(newTags, type);
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        const { handleChangeTag, type, productAttributes } = this.props;
        let tags = productAttributes.length !== 0 ? productAttributes.find(item => item.name === type).value : [];
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        handleChangeTag(tags, type);
        this.setState({
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = e => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = async() => {
        const {type, productAttributes, handleChangeTag} = this.props;
        const tags = productAttributes.length !== 0 ? productAttributes.find(item => item.name === type).value : [];
        await this.setState(({ editInputIndex, editInputValue }) => {
            tags[editInputIndex] = editInputValue;
            return {
                editInputIndex: -1,
                editInputValue: '',
            };
        });
        handleChangeTag(tags, type);
    };

    saveInputRef = input => (this.input = input);

    saveEditInputRef = input => (this.editInput = input);

    render() {
        const { inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
        const {type, productAttributes} = this.props;
        const tags =productAttributes.length !== 0 ? productAttributes.find(item => item.name === type) ? productAttributes.find(item => item.name === type).value : [] : [];
        return (
            <div className="edit-table-tag-group">
                {
                    tags.map((tag, index) => {
                        if (editInputIndex === index) {
                            return (
                                <Input
                                    ref={this.saveEditInputRef}
                                    key={tag}
                                    size="small"
                                    className="tag-input"
                                    value={editInputValue}
                                    onChange={this.handleEditInputChange}
                                    onBlur={this.handleEditInputConfirm}
                                    onPressEnter={this.handleEditInputConfirm}
                                />
                            );
                        }

                        const isLongTag = tag.length > 20;

                        const tagElem = (
                            <Tag
                                className="edit-tag"
                                key={tag}
                                closable={index !== 0}
                                onClose={() => this.handleClose(tag)}
                            >
                                <span
                                    onDoubleClick={e => {
                                        this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                            this.editInput.focus();
                                        });
                                        e.preventDefault();
                                    }}
                                >
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </span>
                            </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag} key={tag}>
                                {tagElem}
                            </Tooltip>
                        ) : (
                                tagElem
                            );
                    })
                }
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined /> Thêm {type === "Color" ? "Màu Sắc" : "Size"}
                    </Tag>
                )}
            </div>
        );
    }
}

EditableTagGroup.propTypes = {
    type: PropTypes.string,
    productAttributes: PropTypes.array,
    handleChangeTag: PropTypes.func,
};

export default EditableTagGroup;
