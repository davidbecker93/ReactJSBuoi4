import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { content } = this.props;
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='row'>
                                <div className="col-4">
                                    <img className='w-100' src={content.image} alt={content.name} />
                                </div>
                                <div className="col-8 mt-1">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td className='col-4'>Tên sản phẩm:</td>
                                                <td className='col-8'>{content.name}</td>
                                            </tr>
                                            <tr>
                                                <td className='col-4'>Mô tả:</td>
                                                <td className='col-8'>{content.description}</td>
                                            </tr>
                                            <tr>
                                                <td className='col-4'>Giá:</td>
                                                <td className='col-8'>${content.price}</td>
                                            </tr>
                                            <tr>
                                                <td className='col-4'>Tồn kho:</td>
                                                <td className='col-8'>{content.quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
