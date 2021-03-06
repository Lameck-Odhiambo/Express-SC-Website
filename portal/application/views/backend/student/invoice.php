<div class="row">
	<div class="col-md-12">

    	<!------CONTROL TABS START------>
		<ul class="nav nav-tabs bordered">
			<li class="active">
            	<a href="#list" data-toggle="tab"><i class="entypo-menu"></i>
					<?php echo get_phrase('invoice/payment_list');?>
                    	</a></li>
		</ul>
    	<!------CONTROL TABS END------>
		<div class="tab-content">
            <!----TABLE LISTING STARTS-->
            <div class="tab-pane box active" id="list">

                <table  class="table table-bordered datatable" id="table_export">
                	<thead>
                		<tr>
                    		<th><div><?php echo get_phrase('student');?></div></th>
                    		<th><div><?php echo get_phrase('title');?></div></th>
                    		<th><div><?php echo get_phrase('description');?></div></th>
                    		<th><div><?php echo get_phrase('amount');?></div></th>
                            <th><div><?php echo get_phrase('amount_paid');?></div></th>
                    		<th><div><?php echo get_phrase('status');?></div></th>
                    		<th><div><?php echo get_phrase('date');?></div></th>
                    		<th width="330"><div><?php echo get_phrase('options');?></div></th>
						</tr>
					</thead>
                    <tbody>
                    	<?php foreach($invoices as $row):?>
                        <tr>
							<td><?php echo $this->crud_model->get_type_name_by_id('student',$row['student_id']);?></td>
							<td><?php echo $row['title'];?></td>
							<td><?php echo $row['description'];?></td>
							<td><?php echo $row['amount'];?></td>
                            <td><?php echo $row['amount_paid'];?></td>
                            <?php if($row['due'] == 0):?>
                                <td>
                                    <button class="btn btn-success btn-xs"><?php echo get_phrase('paid');?></button>
                                </td>
                            <?php endif;?>
                            <?php if($row['due'] > 0):?>
                                <td>
                                    <button class="btn btn-danger btn-xs"><?php echo get_phrase('unpaid');?></button>
                                </td>
                            <?php endif;?>
							<td><?php echo date('d M,Y', $row['creation_timestamp']);?></td>
							<td>
								<div class="row">
                  <div class="col-md-6">
                      <?php echo form_open('student/invoice/make_payment');?>
                          	<input type="hidden" name="invoice_id" 		value="<?php echo $row['invoice_id'];?>" />
                          		<button type="submit" class="btn btn-info" <?php if($row['status'] == 'paid'):?> disabled="disabled"<?php endif;?>>
                                      <i class="entypo-paypal"></i> Pay with paypal
                                  </button>
                      </form>
									</div>
									<div class="col-md-6">
										<a href="<?php echo base_url('index.php?student/pay_with_payumoney/'.$row['student_id'].'/'.$row['invoice_id']);?>" type="button" class="btn btn-success"> <?php echo get_phrase('pay_with_payumoney') ?></a>
									</div>
								</div>
        			</td>
                        </tr>
                        <?php endforeach;?>
                    </tbody>
                </table>
			</div>
            <!----TABLE LISTING ENDS--->




		</div>
	</div>
</div>
