import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import defaultTheme from "../theme/defaultTheme";

import MainWrap from "../styled/MainWrap";
import PageInput from "../styled/PageInput";
import TotalPagesWrap from "../styled/TotalPagesWrap";
import IconWrap from "../styled/IconWrap";
import InputWrap from "../styled/InputWrap";

import { LeftPaginationArrow, RightPaginationArrow } from "../svg";

class Pagination extends Component {
  invisibleDiv;

  constructor(props) {
    super(props);

    this.displayName = "Pagination";

    this.state = {
      selected: +props.selected,
      lastUpdated: +props.selected
    };

    this.state.width = this.getValueWidth(this.state.selected);

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  getValueWidth(value) {
    if (!this.invisibleDiv) {
      const theme = this.props.theme.Pagination ? this.props.theme : defaultTheme;

      console.log('theme', theme);

      this.invisibleDiv = document.createElement("div");
      this.invisibleDiv.style.fontSize = theme.Pagination.fontSize;
      this.invisibleDiv.style.fontWeight = theme.Pagination.fontWeight;
      this.invisibleDiv.style.position = "absolute";
      this.invisibleDiv.style.visibility = "hidden";
      this.invisibleDiv.style.pointerEvents = "none";
      this.invisibleDiv.style.color = 'rgba(0,0,0,0);';
      this.invisibleDiv.style.background = 'rgba(0,0,0,0);';
      this.invisibleDiv.style.left = '-10000px';
      document.body.appendChild(this.invisibleDiv);
    }
    this.invisibleDiv.innerHTML = value;
    return this.invisibleDiv.clientWidth + 26;
  }

  componentWillReceiveProps(props) {
    if (props.selected) {
      this.setState({
        selected:
          props.selected < 1
            ? 1
            : props.selected > props.pagesCount
              ? props.pagesCount
              : props.selected
      });
    }
  }

  moveLeft() {
    const selected =
      this.state.selected > 1 ? this.state.selected - 1 : this.props.pagesCount;

    this.setState({
      selected,
      lastUpdated: +selected,
      width: this.getValueWidth(selected)
    });

    this.props.onSelect(+selected);
  }

  moveRight() {
    const selected =
      this.state.selected < this.props.pagesCount ? this.state.selected + 1 : 1;

    this.setState({
      selected,
      lastUpdated: +selected,
      width: this.getValueWidth(selected)
    });

    this.props.onSelect(+selected);
  }

  onChange(e) {

    const selected = e.target.validity.valid
      ? +e.target.value
      : this.state.selected;

    this.setState({
      selected: selected > 0 ? selected : 1,
      width: this.getValueWidth(selected)
    });
  }

  onBlur(e) {
    this.rightUpdate();
  }

  rightUpdate() {
    if (this.state.selected !== this.state.lastUpdated) {
      const newValue =
        this.state.selected > this.props.pagesCount
          ? this.props.pagesCount
          : this.state.selected;
      this.setState({
        lastUpdated: +newValue,
        selected: +newValue
      });

      this.props.onSelect(+newValue);
    }
  }

  onKeyPress(e) {
    if (e.charCode === 13 || e.keyCode === 13 || e.key == "Enter") {
      this.rightUpdate();
    }
  }

  render() {
    const { pagesCount, theme, selected, onSelect, ...otherProps } = this.props;

    return (
      <MainWrap {...otherProps}>
        <IconWrap onClick={this.moveLeft}>
          <LeftPaginationArrow />
        </IconWrap>

        <InputWrap theme={theme} width={this.state.width + "px"}>
          <PageInput
            pattern="[0-9]*"
            value={this.state.selected}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onKeyPress={this.onKeyPress}
            theme={theme}
          />
        </InputWrap>

        <IconWrap onClick={this.moveRight}>
          <RightPaginationArrow />
        </IconWrap>

        <TotalPagesWrap theme={theme}>
          из {this.props.pagesCount}
        </TotalPagesWrap>
      </MainWrap>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  pagesCount: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  theme: defaultTheme,
  pagesCount: 1,
  selected: 1,
  onSelect: val => null
};

export default withTheme(Pagination);
