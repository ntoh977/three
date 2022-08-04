<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div>Create_root</div>
    <button class="icon-btn add-btn">
        <div class="add-icon"></div>
        <div class="btn-txt" id="create_root">create_root</div>
        <button class="minus" id="minus"> &#8722;
        </button>
    </button>
    <div id="my-tree-view" class="tree-view">
        <div class="branch-node">
            <div class="branch-title" id="branch_title">Body</div>
            <ul class="branches" id="branches">
                <div class="branch-node">
                    <div class="branch-title" id="header">Header</div>
                    <ul class="branches">
                        <li class="three_list">Logo</li>
                        <li class="three_list">Title</li>
                        <li class="three_list">nav</li>
                    </ul>
                </div>
                <div class="branch-node">
                    <div class="branch-title" id="wrapper">wrapper</div>
                    <ul class="branches">
                        <li>
                            <div class="branch-node mod">
                                <div class="branch-title">wrapper</div>
                                <ul class="branches">
                                    <li class="three_list">Logo</li>
                                    <li class="three_list">Title</li>
                                    <li class="three_list">nav</li>
                                </ul>
                            </div>
                        </li>
                        <li class="three_list">events</li>
                        <li class="three_list">links</li>
                    </ul>
                </div>
                <div class="branch-node">
                    <div class="branch-title" id="footer">footer</div>
                    <ul class="branches">
                        <li>#</li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Delete confirmation</h2>
            </div>
            <div class="modal-body">
                <p class="text_modal">This is very dangerous, you shouldnt`t do it! Are you</p>
                <p class="text_modal">really really sure</p>
            </div>
            <div class="modal-footer">
                <span id="timeOut"></span>
                <div class="two_btn">
                    <button class="yes_btn" id="btn_yes">
                        <span class="button_top"> Yes, I am
                        </span>
                    </button>
                    <button class="yes_btn close">
                        <span class="button_top "> No
                        </span>
                    </button>
                    </btn>
                </div>
            </div>
        </div>
    </div>
    <!-- The myModalupadte -->
    <div id="myModalupadte" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" id="close_myModalupadte">&times;</span>
                <h2>Update</h2>
            </div>
            <div class="modal-body">
                <span>letter was -</span>
                <span class="text_modal" id="text_modal_update">
                </span>
                <p class="text_modal">
                <div class="group">
                    <input id="new_name_letter" required="" type="text" class="input">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>New name letter</label>
                </div>
                </p>
            </div>
            <div class="modal-footer">
                <span id="timeOut"></span>
                <div class="two_btn">
                    <button class="yes_btn" id="btn_new_name_letter">
                        <span class="button_top"> Yes, I am
                        </span>
                    </button>
                    <button class="yes_btn close" id="close_update">
                        <span class="button_top "> No
                        </span>
                    </button>
                    </btn>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<script src="/js.js"></script>