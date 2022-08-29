"""empty message

Revision ID: e2e2edf38534
Revises: b51af91725a6
Create Date: 2022-08-24 00:31:51.427141

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e2e2edf38534'
down_revision = 'b51af91725a6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profile', 'zip_code',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=80),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profile', 'zip_code',
               existing_type=sa.String(length=80),
               type_=sa.INTEGER(),
               existing_nullable=True)
    # ### end Alembic commands ###