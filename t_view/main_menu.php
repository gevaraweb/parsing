<header class="header">
        <div class="header-top">
            <div class="container">
                <div class="inner relative">
                    <div class="logo">
                        <a href="#">
                            <img src="t_main_images/logo.png" alt="логотип" class="ne-retina" /> 
                            <img src="t_main_images/logo-retina.png" alt="логотип" class="retina-inline" /> 
                            <span></span> <!-- текст наверху -->
                        </a>
                    </div>
                    
                    <div class="top-menu-wrapper">
                        <div class="table">
                            <div class="table-cell">
 
           <nav class="top-menu hidden-xs hidden-sm">                              
                <?php 

                 /*
                 admin
                 зав.каф. видит одну кафедру (по ид)
                 а лаборант ? декан ?
                 Таблица rank  user  kaf 
                 матмод 1
                 сафина 1
                 сафина 2
                 сафина 3
                 
                     $main_menu = array(
                          "index.php" => "Главная",
                          "index2.php" => "Дисциплины",
                          "index3.php" => "Преподаватели",                       
                          "index4.php" => "Нормы расчета",                       
                          "index5.php" => "Нагрузка",                       
                      );                 
                  */        
                //     if ( !$hide_menu ) {
                            echo "<nav class=\"top-menu hidden-xs hidden-sm\">\n";  
                            echo "\t<ul class=\"\">\n";  
                            
                           foreach ($main_menu as $key => $value) {
                                
                               if ( $active_menu!=$key ) {
                                   echo "<li><a href=\"$key\">$value</a></li>";
                               }
                               else { echo "<li class=\"active\"><a href=\"$key\">$value</a></li>"; }

                           }   

                            echo "\t</ul>\n";                             
               //      }
               ?>
           </nav>                              
<!--
                                    <ul class="">
										<li class="active"><a href="modx-shablonyi/">Главная</a></li>
										<li class="active"><a href="lendingi/" >Дисциплины</a></li>
										<li><a href="texpodderzhka.html" >Преподаватели</a></li>
										<li><a href="hosting.html" >Нормы расчета</a></li>
										<li class="last"><a href="kontaktyi.html" >Нагрузка</a></li>
										<li class="last"><a href="kontaktyi.html" >Нагрузка</a></li>
										<li class="last"><a href="kontaktyi.html" >Нагрузка</a></li>										
									</ul>
-->
                              
                              
                            </div>
                        </div>
                    </div>
                    
                    <div class="header-cart">
    <div class="table">
        <div class="table-cell">
            <div id="msMiniCart" class="">
                
                <div class="empty text-center" title="<?php echo $user_name ?>">
                    <div>
                      <?php if (isset( $_SESSION['lecturerName'] ) ) {
  							
  							$char = mb_substr($_SESSION['lecturerName'], 0, 1);
  							echo "<i aria-hidden=\"true\">$char</i>";

						} else { 
  							echo "<i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>";
						}?>
                      
                    </div>
                </div>
                
                <div class="not_empty text-center">
                    <a href="korzina.html" class="absolute"></a>
                    <div>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span class="ms2_total_count">0</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
                    
                    <div class="menu-button visible-xs visible-sm">
                        <span class="icon-menu-burger">
                            <span class="icon-menu-burger__line"></span>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="header-top-push"></div>
        
        <div class="header-bottom">
            <div class="container text-center relative">
                <div class="festive-mood visible-lg visible-xlg text-right">
                    <img src="t_main_images/festive-mood-main1.png" alt="" class="img1">
                    <img src="t_main_images/festive-mood-main2.png" alt="" class="img2">
                </div>
                <div class="search-form-block">
                    <form data-key="" action="rezultatyi-poiska.html" method="get" id="mse2_form">

	<div class="form-group relative" style="height: 76px;">
	<!--
        <input type="text" placeholder="Какой шаблон вы ищете?" class="form-control" name="query" value="" /> 
        <button type="submit" class="search-btn"><i class="fa fa-search" aria-hidden="true"></i><span>Найти</span></button>
	-->
        <input type="button" class="form-control" name="query" value="TESTFIDDLE<?php echo " " . $_SESSION['select_year'];?>" /> 
	</div>

</form>
                </div>
            </div>
        </div>
</header>