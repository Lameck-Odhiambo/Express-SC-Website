<?php 
$edit_data		=	$this->db->get_where('enroll' , array(
	'student_id' => $param2 , 'year' => $this->db->get_where('settings' , array('type' => 'running_year'))->row()->description
))->result_array();
foreach ($edit_data as $row):
?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary" data-collapsed="0">
        	<div class="panel-heading">
            	<div class="panel-title" >
            		<i class="entypo-plus-circled"></i>
					<?php echo get_phrase('edit_student');?>
            	</div>
            </div>
			<div class="panel-body">
				
                <?php echo form_open(base_url() . 'index.php?admin/student/do_update/'.$row['student_id'].'/'.$row['class_id'] , array('class' => 'form-horizontal form-groups-bordered validate', 'enctype' => 'multipart/form-data'));?>
                
                	
	
					<div class="form-group">
						<label for="field-1" class="col-sm-3 control-label"><?php echo get_phrase('photo');?></label>
                        
						<div class="col-sm-5">
							<div class="fileinput fileinput-new" data-provides="fileinput">
								<div class="fileinput-new thumbnail" style="width: 100px; height: 100px;" data-trigger="fileinput">
									<img src="<?php echo $this->crud_model->get_image_url('student' , $row['student_id']);?>" alt="...">
								</div>
								<div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px"></div>
								<div>
									<span class="btn btn-white btn-file">
										<span class="fileinput-new">Select image</span>
										<span class="fileinput-exists">Change</span>
										<input type="file" name="userfile" accept="image/*">
									</span>
									<a href="#" class="btn btn-orange fileinput-exists" data-dismiss="fileinput">Remove</a>
								</div>
							</div>
						</div>
					</div>
	
					<div class="form-group">
						<label for="field-1" class="col-sm-3 control-label"><?php echo get_phrase('name');?></label>
                        
						<div class="col-sm-5">
							<input type="text" class="form-control" name="name" data-validate="required" data-message-required="<?php echo get_phrase('value_required');?>" 
								value="<?php echo $this->db->get_where('student' , array('student_id' => $row['student_id']))->row()->name; ?>">
						</div>
					</div>

					<div class="form-group">
						<label for="field-1" class="col-sm-3 control-label"><?php echo get_phrase('class');?></label>
                        
						<div class="col-sm-5">
							<input type="text" class="form-control" name="class" disabled
								value="<?php echo $this->db->get_where('class' , array('class_id' => $row['class_id']))->row()->name; ?>">
						</div>
					</div>

					<div class="form-group">
						<label for="field-2" class="col-sm-3 control-label"><?php echo get_phrase('section');?></label>
                        
						<div class="col-sm-5">
							<select name="section_id" class="form-control selectboxit">
                              <option value=""><?php echo get_phrase('select_section');?></option>
                              <?php
                              	$sections = $this->db->get_where('section' , array('class_id' => $row['class_id']))->result_array();
                              	foreach($sections as $row2):
                              ?>
                              <option value="<?php echo $row2['section_id'];?>"
                              	<?php if($row['section_id'] == $row2['section_id']) echo 'selected';?>><?php echo $row2['name'];?></option>
                          <?php endforeach;?>
                          </select>
						</div> 
					</div>

					<div class="form-group">
						<label for="field-1" class="col-sm-3 control-label">Adm No</label>
                        
						<div class="col-sm-5">
							<input type="text" class="form-control" name="student_code"
								value="<?php echo $this->db->get_where('student' , array(
                                    'student_id' => $row['student_id']
                                ))->row()->student_code;?>">
						</div>
					</div>

					<div class="form-group">
						<label for="field-2" class="col-sm-3 control-label"><?php echo get_phrase('parent');?></label>
                        
						<div class="col-sm-5">
							<select name="parent_id[]" class="form-control select2" data-validate="required" data-message-required="<?php echo get_phrase('value_required');?>" multiple>
                      
                              <?php 
                                   $parents= $this->db->get_where('parent_assignment', array('student_id' => $row['student_id']))->result(); 
								 foreach ($parents as $parent):
                                   $parent_name = $this->db->get_where('parent', array('parent_id' => $parent->parent_id))->row()->name; ?>
								
										?>
                                		<option value="<?php echo $parent->parent_id;?>"
                                        	<?php echo 'selected';?>>
													<?php echo $parent_name;?>
                                                </option>
	                                <?php
									endforeach;
								  ?>
								<?php   $other_parents = $this->db->get('parent')->result();

                                   foreach ($other_parents as $p) {  ?>
                                    	<option value="<?php echo $p->parent_id;?>">
													<?php echo $p->name;?>
                                                </option>
                                  <?php }

								 ?>

                          </select>
						</div> 
					</div>

					
					
					<div class="form-group">
						<label for="field-2" class="col-sm-3 control-label"><?php echo get_phrase('birthday');?></label>
                        
						<div class="col-sm-5">
							<input type="text" class="form-control datepicker" name="birthday" 
								value="<?php echo $this->db->get_where('student' , array('student_id' => $row['student_id']))->row()->birthday; ?>" 
									data-start-view="2">
						</div> 
					</div>
					
					<div class="form-group">
						<label for="field-2" class="col-sm-3 control-label"><?php echo get_phrase('gender');?></label>
                        
						<div class="col-sm-5">
							<select name="sex" class="form-control selectboxit">
							<?php
								$gender = $this->db->get_where('student' , array('student_id' => $row['student_id']))->row()->sex;
							?>
                              <option value=""><?php echo get_phrase('select');?></option>
                              <option value="male" <?php if($gender == 'male')echo 'selected';?>><?php echo get_phrase('male');?></option>
                              <option value="female"<?php if($gender == 'female')echo 'selected';?>><?php echo get_phrase('female');?></option>
                          </select>
						</div> 
					</div>
					
				 
			 
                    
					 

			 
                    
                    <div class="form-group">
						<div class="col-sm-offset-3 col-sm-5">
							<button type="submit" class="btn btn-info"><?php echo get_phrase('edit_student');?></button>
						</div>
					</div>
                <?php echo form_close();?>
            </div>
        </div>
    </div>
</div>

<?php
endforeach;
?>

