using Microsoft.EntityFrameworkCore.Migrations;

namespace Cropaia.DAL.Migrations
{
    public partial class addPictureToCrop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "Crops",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Picture",
                table: "Crops");
        }
    }
}
